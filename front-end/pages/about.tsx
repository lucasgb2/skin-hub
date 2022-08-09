import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import  Layout  from '../components/layout/Layout'


  
export function getServerSideProps() {
  const message = [{message:"ola 1"}, {message: "ola 2"}];
  return {
      props: { message },
  };
}


const About = (props) => {
  console.log(props);
  return (    
    <p>{props.message[0].message}</p>    
  )
}

export default About;
