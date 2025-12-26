import React from 'react';
import Sidebar from '../others/Sidebar';
import Topbar from '../others/Topbar';
import ProfileTab from '../common/ProfileTab';
import JobsTab from '../common/JobsTab';
import CompanyTab from '../common/CompanyTab';
import CompanyList from '../common/ComanyList';

const UserDashboard = ({ userData, activeTab, fetchUserData }: any) => {
    return (
        <div className='w-full h-full md:h-screen min-h-screen flex flex-row items-start justify-start fixed'>
            <Sidebar />
            <div className='bg-white text-black flex flex-col w-full h-full md:relative fixed'>
                <Topbar />

                {activeTab === 'profile' && (
                    <ProfileTab userData={userData} fetchUserData={fetchUserData} />
                )}

                {activeTab === 'jobs' && (
                    <JobsTab userData={userData} />
                )}

                {activeTab === 'company' && (
                    <CompanyTab userData={userData} />
                )}

                {activeTab === 'list' && (
                    <CompanyList />
                )}
            </div>
        </div>
    )
}

export default UserDashboard