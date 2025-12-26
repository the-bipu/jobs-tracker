import React, { useState, useMemo } from 'react';
import { Search, Star, MapPin, Users, Calendar, Building2, ExternalLink } from 'lucide-react';
import { sharkTankFood } from '@/components/assets/food-processing-shark-tank';
import { foodProcessingCompanies } from '@/components/assets/food-processing-companies';
import { softwareDevelopmentCompanies } from '@/components/assets/software-development-companies';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Type definitions
interface SharkTankCompany {
  name: string;
  description: string;
  deal_status: string;
  categories: string[];
  season: number | null;
  links: {
    amazon_store?: string;
    website?: string;
  };
}

interface RegularCompany {
  company_name: string;
  company_logo_url: string;
  company_rating: string;
  rating_count: string;
  overview_url: string;
  location_info: string;
  page_number: number;
  founded_in: string;
  india_employee_count: string;
  global_employee_count: string;
  india_headquarters: string;
  office_locations: string;
  website: string;
  primary_industry: string;
  other_industries: string;
  about_company: string;
}

const CompanyList: React.FC = () => {
  const [selectedStream, setSelectedStream] = useState<'shark-tank' | 'food-processing' | 'software-development'>('shark-tank');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'name' | 'rating' | 'none'>('none');
  const [filterRating, setFilterRating] = useState<'all' | '3+' | '4+'>('all');

  const currentCompanies = useMemo(() => {
    switch (selectedStream) {
      case 'shark-tank':
        return sharkTankFood;
      case 'food-processing':
        return foodProcessingCompanies;
      case 'software-development':
        return softwareDevelopmentCompanies;
      default:
        return [];
    }
  }, [selectedStream]);

  const filteredAndSortedCompanies = useMemo(() => {
    let filtered = currentCompanies.filter(company => {
      const name = (company as any).name || (company as any).company_name || '';
      const description = (company as any).description || (company as any).about_company || '';
      const searchText = `${name} ${description}`.toLowerCase();
      const matchesSearch = searchText.includes(searchQuery.toLowerCase());

      if (selectedStream === 'shark-tank') {
        return matchesSearch;
      }

      const rating = parseFloat((company as RegularCompany).company_rating || '0');
      let matchesRating = true;

      if (filterRating === '4+') matchesRating = rating >= 4.0;
      else if (filterRating === '3+') matchesRating = rating >= 3.0;

      return matchesSearch && matchesRating;
    });

    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        const nameA = ((a as any).name || (a as any).company_name || '').toLowerCase();
        const nameB = ((b as any).name || (b as any).company_name || '').toLowerCase();
        return nameA.localeCompare(nameB);
      } else if (sortBy === 'rating') {
        const ratingA = parseFloat((a as any).company_rating || '0');
        const ratingB = parseFloat((b as any).company_rating || '0');
        return ratingB - ratingA;
      } else if (sortBy === 'none') {
        return 0;
      }
      return 0;
    });

    return filtered;
  }, [currentCompanies, searchQuery, sortBy, filterRating, selectedStream]);

  const SharkTankCard: React.FC<{ company: SharkTankCompany }> = ({ company }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
        {company.deal_status && (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${company.deal_status === 'Deal Closed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
            }`}>
            {company.deal_status}
          </span>
        )}
      </div>

      <p className="text-gray-600 text-sm mb-4">{company.description}</p>

      {company.categories && company.categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {company.categories.map((cat, idx) => (
            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
              {cat}
            </span>
          ))}
        </div>
      )}

      {company.season && (
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>Season {company.season}</span>
        </div>
      )}

      <div className="flex gap-3 mt-4">
        {company.links?.website && (
          <a
            href={company.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Website
          </a>
        )}
        {company.links?.amazon_store && (
          <a
            href={company.links.amazon_store}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-orange-600 hover:text-orange-800 text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Amazon
          </a>
        )}
      </div>
    </div>
  );

  const RegularCompanyCard: React.FC<{ company: RegularCompany }> = ({ company }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <Image src={company.company_logo_url} alt={company.company_name} width={64} height={64} className="w-16 h-16 rounded object-contain" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{company.company_name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-gray-900">{company.company_rating}</span>
            </div>
            <span className="text-gray-500 text-sm">{company.rating_count}</span>
          </div>
        </div>
      </div>

      {/* <p className="text-gray-600 text-sm mb-4 line-clamp-3">{company.about_company}</p> */}

      <div className="space-y-2 mb-4">
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <Building2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{company.primary_industry}</span>
        </div>

        <div className="flex items-start gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{company.india_headquarters}</span>
        </div>

        <div className="flex items-start gap-2 text-sm text-gray-600">
          <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{company.india_employee_count} employees in India</span>
        </div>

        <div className="flex items-start gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>Founded in {company.founded_in}</span>
        </div>
      </div>

      <div className="flex gap-3 mt-4 pt-4 border-t">
        {company.website && (
          <a
            href={`https://${company.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Website
          </a>
        )}
        {company.overview_url && company.overview_url !== '#' && (
          <a
            href={company.overview_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Details
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 p-5 overflow-y-auto h-full bg-gray-50">
      <div className='w-full flex flex-col gap-5'>
        <div className='flex flex-col'>
          <h4 className="text-2xl font-semibold text-gray-900">Company List</h4>
          <div className='text-base font-light text-gray-600'>Explore different companies across streams.</div>
        </div>

        {/* Stream Selection */}
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => setSelectedStream('shark-tank')} variant={selectedStream === 'shark-tank' ? 'default' : 'outline'}>
            Shark Tank Companies
          </Button>
          <Button onClick={() => setSelectedStream('food-processing')} variant={selectedStream === 'food-processing' ? 'default' : 'outline'}>
            Food Processing
          </Button>
          <Button onClick={() => setSelectedStream('software-development')} variant={selectedStream === 'software-development' ? 'default' : 'outline'}>
            Software Development
          </Button>
        </div>

        <div className="w-full flex flex-row items-center justify-between flex-wrap gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type="text" placeholder="Search companies..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 bg-white" />
            </div>

            <Select value={sortBy} onValueChange={(value) => setSortBy(value as 'name' | 'rating' | 'none')}>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="name">Sort by Name</SelectItem>
                {selectedStream !== 'shark-tank' && (
                  <SelectItem value="rating">Sort by Rating</SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>

          {selectedStream !== 'shark-tank' && (
            <div className="flex gap-3 mt-4">
              <span className="text-sm font-medium text-gray-700 self-center">Rating:</span>
              <div className="flex gap-2">
                <Button onClick={() => setFilterRating('all')} variant={filterRating === 'all' ? 'default' : 'outline'} className='rounded-full'>
                  All
                </Button>
                <Button onClick={() => setFilterRating('4+')} variant={filterRating === '4+' ? 'default' : 'outline'} className='rounded-full'>
                  4+ ⭐
                </Button>
                <Button onClick={() => setFilterRating('3+')} variant={filterRating === '3+' ? 'default' : 'outline'} className='rounded-full'>
                  3+ ⭐
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="text-sm text-gray-600">
          Showing {filteredAndSortedCompanies.length} {filteredAndSortedCompanies.length === 1 ? 'company' : 'companies'}
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedCompanies.length > 0 ? (
            filteredAndSortedCompanies.map((company, idx) => (
              <div key={idx}>
                {selectedStream === 'shark-tank' ? (
                  <SharkTankCard company={company as SharkTankCompany} />
                ) : (
                  <RegularCompanyCard company={company as RegularCompany} />
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No companies found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyList;