import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '../ui/separator';
import { toast } from 'sonner';

interface UserData {
    email: string;
    name: string;
    phone: string;
    gender: string;
    password: string;
    createdAt: string;
}

interface ProfileTabProps {
    userData: UserData;
    fetchUserData: () => Promise<void>;
}

const ProfileTab = ({ userData, fetchUserData }: ProfileTabProps) => {
    const [formData, setFormData] = useState({
        name: userData.name || '',
        phone: userData.phone || '',
        gender: userData.gender || '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleGenderChange = (value: string) => {
        setFormData(prev => ({ ...prev, gender: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const updateData: any = {};
            if (formData.name !== userData.name) updateData.name = formData.name;
            if (formData.phone !== userData.phone) updateData.phone = formData.phone;
            if (formData.gender !== userData.gender) updateData.gender = formData.gender;
            if (formData.password) updateData.password = formData.password;

            if (Object.keys(updateData).length === 0) {
                toast.error("No changes to update");
                setLoading(false);
                return;
            }

            const response = await fetch(`/api/users/update?email=${encodeURIComponent(userData.email)}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Profile updated successfully!");
                setFormData(prev => ({ ...prev, password: '' }));
            } else {
                toast.error('Failed to update profile');
            }
        } catch (error) {
            toast.error('An error occurred while updating profile');
        } finally {
            fetchUserData();
            setLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="space-y-6 p-5 overflow-y-auto h-full">
            <div className='w-full flex flex-col gap-5'>
                <div className='flex flex-col'>
                    <h4 className="text-xl font-medium">Personal Information</h4>
                    <div className='text-base font-light'>View your account details</div>
                </div>
                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label className="text-sm font-medium text-gray-500">Email</Label>
                            <p className="mt-1 text-sm text-gray-900">{userData.email}</p>
                        </div>
                        <div>
                            <Label className="text-sm font-medium text-gray-500">Name</Label>
                            <p className="mt-1 text-sm text-gray-900">{userData.name || 'Not provided'}</p>
                        </div>
                        <div>
                            <Label className="text-sm font-medium text-gray-500">Phone</Label>
                            <p className="mt-1 text-sm text-gray-900">{userData.phone || 'Not provided'}</p>
                        </div>
                        <div>
                            <Label className="text-sm font-medium text-gray-500">Gender</Label>
                            <p className="mt-1 text-sm text-gray-900 capitalize">{userData.gender || 'Not provided'}</p>
                        </div>
                        <div>
                            <Label className="text-sm font-medium text-gray-500">Member Since</Label>
                            <p className="mt-1 text-sm text-gray-900">
                                {userData.createdAt ? formatDate(userData.createdAt) : 'Not available'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Separator className="mb-4 border md:border-gray-500 border-gray-700" />

            <div className='w-full flex flex-col gap-5'>
                <div className='flex flex-col'>
                    <h4 className="text-xl font-medium">Update Profile</h4>
                    <div className='text-base font-light'>Make changes to your profile information</div>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="gender">Gender</Label>
                                <Select value={formData.gender} onValueChange={handleGenderChange}>
                                    <SelectTrigger className='w-full'>
                                        <SelectValue placeholder="Select gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">New Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Leave blank to keep current"
                                />
                            </div>
                        </div>

                        <Button type="submit" disabled={loading} className="w-full md:w-auto">
                            {loading ? 'Updating...' : 'Update Profile'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileTab;