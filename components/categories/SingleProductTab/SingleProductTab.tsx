"use client";
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TabContent {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface SingleProductTabProps {
    tabs?: TabContent[];
    defaultTab?: string;
}

export function SingleProductTab(
    props: SingleProductTabProps = {}
) {
    const {
        tabs = [
            {
                id: 'description',
                label: 'Description',
                content: (
                    <div className="flex flex-col gap-2.5 sm:gap-5">
                        <div className="lg:flex grid lg:grid-cols-5 grid-cols-2 gap-2 lg:gap-6 flex-wrap leading-9">
                            <div className="flex items-center gap-2">
                                <span className="text-text-gray text-xs sm:text-base">💰: 20+ ➡️ 875</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-text-gray text-xs sm:text-base">Under 20 ➡️ 925</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-text-gray text-xs sm:text-base">Under 15 ➡️ 975</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-text-gray text-xs sm:text-base">Under 10 ➡️ 1025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-text-gray text-xs sm:text-base">Under 5 ➡️ 1075</span>
                            </div>
                        </div>
                        <p className="text-text-gray leading-6 text-xs sm:text-base">
                            Cherry Garcia is a crowd-favorite strain known for its smooth, dessert-like flavor and balanced effects. Expect a burst of sweet cherry and creamy berry notes on the inhale, rounded by earthy undertones that linger pleasantly. This premium bulk flower offers dense, trichome-rich buds with deep green hues and a hint of purple – a visual treat that matches its flavor.
                        </p>
                        <button className="hidden lg:block w-fit mx-auto border border-[#bbbbbb] px-15 py-2.5 rounded-[10px] text-base font-medium hover:bg-gray-50 leading-9 text-text-dark">
                            More Details
                        </button>
                    </div>
                ),
            },
            {
                id: 'additional',
                label: 'Additional Information',
                content: (
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-col gap-3.5'>
                            <h4 className=" text-xs lg:text-base">Units</h4>
                            <p className="text-text-gray text-xs lg:text-base">1 lbs, 2 lbs, 3 lbs, 4 lbs, 5 lbs, 6 lbs, 7 lbs, 8 lbs, 9 lbs, 10 lbs, 11 lbs, 12 lbs, 13 lbs, 14 lbs, 15 lbs, 16 lbs, 17 lbs, 18 lbs, 19 lbs, 20 lbs</p>
                        </div>
                        <div className="flex gap-10 lg:gap-13 leading-6">
                            <div className='flex sm:gap-5 gap-2'>
                                <p className="text-text-dark text-xs lg:text-base">Weight</p>
                                <p className="font-normal text-text-gray text-xs lg:text-base">3.5g</p>
                            </div>
                            <div className='flex sm:gap-5 gap-2'>
                                <p className="text-text-dark text-xs lg:text-base">Type</p>
                                <p className="font-normal text-text-gray text-xs lg:text-base">Green</p>
                            </div>
                            <div className='flex sm:gap-5 gap-2'>
                                <p className="text-text-dark text-xs lg:text-base">THCa</p>
                                <p className="font-normal text-text-gray text-xs lg:text-base">77.20%</p>
                            </div>
                        </div>
                    </div>
                ),
            },
            {
                id: 'reviews',
                label: 'Reviews (3)',
                content: (
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                        {/* Reviews List */}
                        <div className="flex flex-col gap-4 lg:col-span-2">
                            {[
                                {
                                    name: 'Thomas',
                                    date: 'December 4, 2022 at 3:12 pm',
                                    rating: 4.4,
                                    image: '',
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?',
                                },
                                {
                                    name: 'Gemma',
                                    date: 'December 4, 2022 at 3:12 pm',
                                    rating: 4.4,
                                    image: '',
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?',
                                },
                                {
                                    name: 'Sandler',
                                    date: 'December 4, 2022 at 3:12 pm',
                                    rating: 4.4,
                                    image: '',
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?',
                                },
                            ].map((review, idx) => (
                                <div key={idx} className="border p-3.5 rounded-[10px] border-[#bbbbbb] flex flex-col">
                                    <div className="flex items-start lg:items-center gap-5.5">
                                        <div className='flex flex-col items-center justify-center gap-2.5'>

                                            <div className="size-15 lg:size-20 bg-gray-300 rounded-full flex items-center justify-center font-bold text-white text-lg shrink-0">
                                                <img src={review.image || '/images/placeholder-man.jpg'} alt='stars' className='rounded-full' />
                                            </div>
                                            <p className="font-semibold text-[14px] lg:text-base leading-6 text-text-dark">{review.name}</p>
                                        </div>
                                        <div className="flex-1 flex flex-col gap-1.5">
                                            <div className=' flex justify-between'>
                                                <span className="text-[10px] lg:text-base text-text-dark">{review.date}</span>
                                                <p className="text-text-dark text-xs leading-4 lg:inline-flex justify-center items-center gap-1 hidden ">{review.rating} <img src='/images/categories/stars.svg' alt='stars' /></p>
                                            </div>
                                            <p className="text-xs lg:text-base leading-6 text-text-gray">{review.text} <span className="text-text-dark ml-2">Reply</span></p>

                                        </div>
                                    </div>
                                    <p className="text-text-dark text-xs leading-4 inline-flex justify-end items-center gap-1 lg:hidden">{review.rating} <img src='/images/categories/stars.svg' alt='stars' /></p>
                                </div>
                            ))}
                        </div>
                        {/* Ratings Breakdown */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-[20px] text-text-dark leading-9">Customer Reviews</h4>
                            <div className="flex flex-col gap-3.5">
                                {/* Overall rating */}
                                <p className="text-text-dark text-xs leading-4 inline-flex items-center gap-1"><img src='/images/categories/stars.svg' alt='stars' /> 4.4</p>
                                <div className='flex flex-col gap-2.5'>
                                    {/* Progress bars */}
                                    {[
                                        { star: 5, percent: 90 },
                                        { star: 4, percent: 75 },
                                        { star: 3, percent: 15 },
                                        { star: 2, percent: 10 },
                                        { star: 1, percent: 5 },
                                    ].map((item) => (
                                        <div key={item.star} className="flex items-center gap-4">
                                            <span className="text-sm w-10 text-text-gray">{item.star} Star</span>
                                            <div className="flex-1 h-4 bg-gray-200 rounded relative overflow-hidden">
                                                <div
                                                    className="h-4 bg-[#F0BA43] absolute left-0 top-0"
                                                    style={{ width: `${item.percent}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-sm text-text-gray w-10 text-right">{item.percent}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ),
            },
            {
                id: 'how-to-use',
                label: 'How to use!',
                content: (
                    <div className="flex flex-col gap-4">
                        {[
                            {
                                title: 'For Licensed Processors & Manufacturers:',
                                items: [
                                    'Use Cherry Garcia bulk flower for premium pre-rolls, concentrates, or infused products.',
                                    'Maintain in cool, dry storage (60–68°F / 45–55% RH) to preserve terpenes and potency.',
                                    'For extraction, ensure closed-loop, compliant systems are used for optimal yield and safety.',
                                ],
                            },
                            {
                                title: 'For Retail & Packaging Partners:',
                                items: [
                                    'Break down bulk flower in a controlled, sanitized environment.',
                                    'Weigh and package portions with consistent labeling and batch tracking.',
                                    'Use airtight, opaque containers to maintain freshness and aroma.',
                                ],
                            },
                            {
                                title: 'For End Consumers (Where Legal):',
                                items: [
                                    'Grind gently to preserve cannabinoids.',
                                    'Use with approved dry herb vaporizer or other compliant consumption methods.',
                                    'Store unused product in a cool, dark place away from direct sunlight and moisture.',
                                ],
                            },
                        ].map((section, idx) => (
                            <div key={idx} className='flex flex-col gap-2'>
                                <h4 className="leading-6 lg:text-base text-sm">{section.title}</h4>
                                <ul className="text-xs lg:text-base text-text-gray flex flex-col gap-1 list-disc list-inside">
                                    {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <p className="text-text-gray leading-6">
                            <span className='text-text-dark'>⚠️ Note: </span>This product is intended for licensed cannabis operators and adult use only in accordance with local laws.
                        </p>
                    </div>
                ),
            },
        ],
        defaultTab = 'description',
    } = props;
    const [activeTab, setActiveTab] = useState(defaultTab);

    return (
        <div className="w-full py-8">
            {/* Mobile View: Stacked Content */}
            <div className="md:hidden flex flex-col gap-2">
                {tabs.map((tab) => (
                    <div key={tab.id} className="">
                        <button
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "w-full px-4 py-3 font-medium text-sm text-center border border-[#bbbbbb] text-text-dark rounded-md",
                                activeTab === tab.id
                                    ? 'border-[#F0BA43] text-text-dark rounded-md'
                                    : 'bg-white text-text-dark hover:bg-gray-50 border'
                            )}
                        >
                            {tab.label}
                        </button>
                        {activeTab === tab.id && (
                            <div className="py-4 bg-white text-sm">{tab.content}</div>
                        )}
                    </div>
                ))}
            </div>

            {/* Desktop View: Horizontal Tabs */}
            <div className="hidden md:flex flex-col gap-12">
                {/* Tab Navigation */}
                <div className="flex gap-15">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                'text-[20px] font-medium text-[#1D1D1D] relative transition-all leading-9',
                                activeTab === tab.id
                                    ? 'border-b-2 border-[#F0BA43]'
                                    : 'text-text-gray hover:text-[#1D1D1D]'
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="">
                    {tabs.find((tab) => tab.id === activeTab)?.content}
                </div>
            </div>
        </div>
    );
}
