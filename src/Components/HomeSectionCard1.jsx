import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { section1_url } from './detailsInarray';

export default function HomeSectionCard1() {
    return (
        <Box m='auto' w="85%">
            <Heading m='10px 0' size='md' textAlign='left'>Explore India</Heading>
            <Text mb="0.5rem" textAlign='left' >These popular destinations have a lot to offer</Text>
            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><Image src={section1_url[0]} /><Text p='10px 0 0 0' textAlign='left' fontSize='17px' fontWeight='bold'>goa</Text><Text textAlign='left' fontSize='14px' >5,244 properties</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url[1]} /><Text p='10px 0 0 0' textAlign='left' fontSize='17px' fontWeight='bold'>goa</Text><Text textAlign='left' fontSize='14px' >5,244 properties</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url[2]} /><Text p='10px 0 0 0' textAlign='left' fontSize='17px' fontWeight='bold'>goa</Text><Text textAlign='left' fontSize='14px' >5,244 properties</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url[3]} /><Text p='10px 0 0 0' textAlign='left' fontSize='17px' fontWeight='bold'>goa</Text><Text textAlign='left' fontSize='14px' >5,244 properties</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url[4]} /><Text p='10px 0 0 0' textAlign='left' fontSize='17px' fontWeight='bold'>goa</Text><Text textAlign='left' fontSize='14px' >5,244 properties</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url[5]} /><Text p='10px 0 0 0' textAlign='left' fontSize='17px' fontWeight='bold'>goa</Text><Text textAlign='left' fontSize='14px' >5,244 properties</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url[6]} /><Text p='10px 0 0 0' textAlign='left' fontSize='17px' fontWeight='bold'>goa</Text><Text textAlign='left' fontSize='14px' >5,244 properties</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url[7]} /><Text p='10px 0 0 0' textAlign='left' fontSize='17px' fontWeight='bold'>goa</Text><Text textAlign='left' fontSize='14px' >5,244 properties</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url[8]} /><Text p='10px 0 0 0' textAlign='left' fontSize='17px' fontWeight='bold'>goa</Text><Text textAlign='left' fontSize='14px' >5,244 properties</Text></SwiperSlide>
                <SwiperSlide><Image src={section1_url[9]} /><Text p='10px 0 0 0' textAlign='left' fontSize='17px' fontWeight='bold'>goa</Text><Text textAlign='left' fontSize='14px' >5,244 properties</Text></SwiperSlide>
            </Swiper>
        </Box>

    )
}
