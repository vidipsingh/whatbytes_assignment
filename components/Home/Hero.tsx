"use client"

import React, { useState } from 'react'
import { SiSimpleanalytics } from "react-icons/si";
import { RiAwardFill } from "react-icons/ri";
import { MdContactPage } from "react-icons/md";
import html from "../../public/images/html.png";
import Image from 'next/image';
import LineChartWithDots from './Chart';
import DoughnutChart from './PieChart';
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank, setRank] = useState('1');
  const [percentile, setPercentile] = useState('30%');
  const [score, setScore] = useState('10 / 15');

  const [inputValue1, setInputValue1] = useState(rank);
  const [inputValue2, setInputValue2] = useState(percentile.replace('%', ''));
  const [inputValue3, setInputValue3] = useState(score.split(' ')[0]); 

  const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');
  const [error3, setError3] = useState('');

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(e.target.value);
    const value = e.target.value;
    setInputValue1(value);

    // Validation logic: if empty or not a number, set the error
    if (value === '') {
      setError1('required | should be number');
    } else {
      setError1(''); // No error
    }
  };

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(e.target.value);

    const value = e.target.value;
    setInputValue2(value);

    // Validation logic: if empty or not a number, set the error
    if (value === '') {
      setError2('required | percentile 0-100');
    } else {
      setError2(''); // No error
    }
  };

  const handleInputChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue3(e.target.value);

    const value = e.target.value;
    setInputValue3(value);

    // Validation logic: if empty or not a number, set the error
    if (value === '') {
      setError3('required');
    } else {
      setError3(''); // No error
    }
  };


  const handleSave = () => {
    let valid = true;
    
    // Validation for rank
    if (inputValue1 === '' || isNaN(Number(inputValue1))) {
      setError1('Required | Should be a number');
      valid = false;
    } else {
      setError1('');
    }

    // Validation for percentile
    if (inputValue2 === '' || isNaN(Number(inputValue2))) {
      setError2('Required | Should be a number');
      valid = false;
    } else {
      setError2('');
    }

    // Validation for score
    if (inputValue3 === '' || isNaN(Number(inputValue3))) {
      setError3('Required | Should be a number');
      valid = false;
    } else {
      setError3('');
    }

    // If valid, update displayed values
    if (valid) {
      setRank(inputValue1);
      setPercentile(`${inputValue2}%`);
      setScore(`${inputValue3} / 15`);
      toggleModal(); // Close modal
    }
  };


  return (
    <div className='flex'>
      <div className='w-1/5 border-r-[1.5px] lg:h-[510px] md:h-[1500px] py-8 font-semibold'>
        <div className='text-black/80 mt-6 md:pl-5 sm:pl-3 pl-2 md:py-3.5 flex items-center gap-3 cursor-pointer text-lg mr-2 rounded-r-full hover:bg-blue-50 hover:text-blue-600'>
            <SiSimpleanalytics className='md:text-xl text-lg md:flex hidden'/>
            <h1 className='md:text-base sm:text-sm text-xs'>Dashboard</h1>
        </div>
        <div className='text-blue-600 mt-6 md:pl-5 sm:pl-3 pl-2 md:py-3.5 flex items-center gap-3 cursor-pointer text-lg mr-2 rounded-r-full hover:bg-blue-50'>
            <RiAwardFill className='md:text-xl text-lg md:flex hidden'/>
            <h1 className='md:text-base sm:text-sm text-xs'>Skill Test</h1>
        </div>
        <div className='text-black/80 mt-6 md:pl-5 sm:pl-3 pl-2 md:py-3.5 flex items-center gap-3 cursor-pointer text-lg mr-2 rounded-r-full hover:bg-blue-50 hover:text-blue-600'>
            <MdContactPage className='md:text-xl text-lg md:flex hidden'/>
            <h1 className='md:text-base sm:text-sm text-xs'>Internship</h1>
        </div>
      </div>


      <div className='lg:w-full md:w-5/6 sm:w-11/12 w-full p-4'>
        <div className='text-black px-2 w-28'>
          <h1>Skill Test</h1>
        </div>

        <div className='lg:flex w-full gap-10'>
          <div className='text-black lg:w-3/5 md:w-5/6 sm:w-11/12 w-full'>
            <div className='flex w-full border-[1.35px] rounded-md border-gray-200 gap-4 my-4 ml-2 px-4 py-4 items-center justify-center'>
              <Image src={html} width={50} height={50} alt={''} />
              <div>
                <h1 className='font-bold'>Hyper Text Markup Language</h1>
                <h1 className='text-gray-800'>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</h1>
              </div>
              <button className='px-6 py-1.5 rounded-md border-2 border-black text-white bg-blue-900 hover:bg-blue-700 font-semibold' onClick={toggleModal}>Update</button>
            </div>

            <div className='w-full border-[1.35px] rounded-md border-gray-200 gap-4 my-4 mx-2 py-4 px-2 items-center'>
              <h1 className='font-bold px-2'>Quick Statistics</h1>
              <div className='py-2 sm:px-4 px-1 gap-3 flex justify-between'>
                <div className='flex gap-2 w-44 items-center sm:border-r-[1.35px] border-r-gray-300 pl-2 py-2'>
                  <div className='lg:p-3 sm:p-2 bg-gray-100 rounded-full'>🏆</div>
                  <div>
                    <h1 className='font-bold'>{rank}</h1>
                    <h1 className='text-gray-500 text-xs sm:text-sm'>YOUR RANK</h1>
                  </div>
                </div>

                <div className='flex gap-2 w-44 items-center sm:border-r-[1.35px] border-r-gray-300 py-2'>
                <div className='lg:p-3 sm:p-2 bg-gray-100 rounded-full'>🗒️</div>
                  <div>
                    <h1 className='font-bold'>{percentile}</h1>
                    <h1 className='text-gray-500 text-xs sm:text-sm'>PERCENTILE</h1>
                  </div>
                </div>

                <div className='flex gap-2 w-52 items-center py-2'>
                <div className='lg:p-3 sm:p-2 bg-gray-100 rounded-full'>✅</div>
                  <div>
                    <h1 className='font-bold'>{score}</h1>
                    <h1 className='text-gray-500 text-xs sm:text-sm'>CORRECT ANSWERS</h1>
                  </div>
                </div>
              </div>
              
            </div>

            <div className='w-full border-[1.35px] rounded-md border-gray-200 gap-4 my-4 mx-2 py-4 px-2 items-center'>
              <h1 className='font-bold px-2'>Comparison Graph</h1>
              <div className='px-2 flex justify-between items-center'>
                <div className=''>
                  <h1><span className='text-gray-800 font-bold'>You scored {percentile} percentile</span> which is lower than the</h1>
                  <h1>average percentile 72% of all the engineers who took this assessment</h1>
                </div>
                <div className='p-3 mb-8 bg-gray-100 rounded-full'>📈</div>
              </div>

              <LineChartWithDots />
            </div>
          </div>

          <div className='text-black w-3/4'>
            <div className='border-[1.35px] rounded-md border-gray-200 gap-4 my-4 mx-2 py-4 px-4 items-center'>
             <h1 className='font-bold'>Syllabus Wise Analysis</h1> 
             <div className='my-4'>
                <div>
                  <h1 className='my-2'>HTML, Tools, Forms, History</h1>
                  <div className='flex gap-5 items-center'>
                    <div className='w-full h-4 bg-blue-100 rounded-full'>
                      <div className='w-[80%] bg-blue-500 rounded-full text-xs text-blue-500'>s</div>
                    </div>
                    <h1 className='font-bold text-blue-500'>80%</h1>
                  </div>
                </div>
                <div>
                  <h1 className='my-2'>Tags & References in HTML</h1>
                  <div className='flex gap-5 items-center'>
                    <div className='w-full h-4 bg-orange-100 rounded-full'>
                      <div className='w-[60%] bg-orange-500 rounded-full text-xs text-orange-500'>s</div>
                    </div>
                    <h1 className='font-bold text-orange-500'>60%</h1>
                  </div>
                </div>
                <div>
                  <h1 className='my-2'>Tables & References in HTML</h1>
                  <div className='flex gap-5 items-center'>
                    <div className='w-full h-4 bg-red-100 rounded-full'>
                      <div className='w-[24%] bg-red-500 rounded-full text-xs text-red-500'>s</div>
                    </div>
                    <h1 className='font-bold text-red-500'>24%</h1>
                  </div>
                </div>
                <div>
                  <h1 className='my-2'>Tables & CSS Basics</h1>
                  <div className='flex gap-5 items-center'>
                    <div className='w-full h-4 bg-green-100 rounded-full'>
                      <div className='w-[96%] bg-green-500 rounded-full text-xs text-green-500'>s</div>
                    </div>
                    <h1 className='font-bold text-green-500'>96%</h1>
                  </div>
                </div>
             </div>
            </div>

            <div className='border-[1.35px] rounded-md border-gray-200 gap-4 my-4 mx-2 py-4 px-4 items-center'>
              <div className='flex justify-between'>
               <h1 className='font-bold'>Question Analysis</h1>
               <h1 className='text-blue-600 font-bold'>{score.split(' ')[0]}/15</h1>
              </div>
              <h1 className='my-4'><span className='font-bold text-gray-700 '>You scored {score.split(' ')[0]} questions correct out of 15.</span> However it still needs some improvements</h1>
              <DoughnutChart score={Number(inputValue3)} />
            </div>
          </div>
        </div>

        {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 rounded-md">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-xl">
            <div className='flex w-full justify-between items-center'>
              <h2 className="text-xl font-bold">Update Scores</h2>
              <Image src={html} width={40} height={40} alt={''} />
            </div>

            <div className='mt-4 mb-2'>
              <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                  <h1 className='bg-blue-900 flex rounded-full text-white p-1 h-6 w-6 items-center justify-center'>1</h1>
                  <h1>Update your <span className='font-bold'>Rank</span></h1>
                </div>
                <div>
                  <input type="text" style={{ borderRadius: '0.375rem' }} placeholder='Rank' className={`w-36 h-8 px-2 border-2 rounded-md ${error1 ? 'border-red-500 border-[1.5px]' : 'border-blue-800 border-[1.5px]'}`} value={inputValue1} onChange={handleInputChange1} />
                   {/* Display error message below input */}
                  {error1 && (
                    <p className="text-red-500 text-sm mt-1">{error1}</p>
                  )}
                </div>
              </div>

              <div className='flex justify-between items-center my-4'>
                <div className='flex gap-3'>
                  <h1 className='bg-blue-900 flex rounded-full text-white p-1 h-6 w-6 items-center justify-center'>2</h1>
                  <h1>Update your <span className='font-bold'>Percentile</span></h1>
                </div>
                <div>
                  <input type="text" style={{ borderRadius: '0.375rem' }} placeholder='Rank' className={`w-36 h-8 px-2 border-2 rounded-md ${error2 ? 'border-red-500 border-[1.5px]' : 'border-blue-800 border-[1.5px]'}`} value={inputValue2} onChange={handleInputChange2} />
                   {/* Display error message below input */}
                  {error2 && (
                    <p className="text-red-500 text-sm mt-1">{error2}</p>
                  )}
                </div>
              </div>

              <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                  <h1 className='bg-blue-900 flex rounded-full text-white p-1 h-6 w-6 items-center justify-center'>3</h1>
                  <h1>Update your <span className='font-bold'>Current Score (out of 15)</span></h1>
                </div>
                <div >
                  <input type="text" style={{ borderRadius: '0.375rem' }} placeholder='Rank' className={`w-36 h-8 px-2 border-2 rounded-md ${error3 ? 'border-red-500 border-[1.5px]' : 'border-blue-800 border-[1.5px]'}`} value={inputValue3} onChange={handleInputChange3} />
                   {/* Display error message below input */}
                  {error3 && (
                    <p className="text-red-500 text-sm mt-1">{error3}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Buttons */}
            <div className="flex justify-end gap-4 mt-5">
              <button
                style={{ borderRadius: '0.375rem' }}
                className="px-3 py-2 rounded-md border-[1.5px] border-black text-blue-900"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button style={{ borderRadius: '0.375rem' }} className="flex items-center gap-2 px-7 py-2 border-[1.5px] border-black bg-blue-900 text-white rounded-md hover:bg-blue-700" onClick={handleSave}>
                Save
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      )}
        
      </div>
    </div>
  )
}

export default Hero
