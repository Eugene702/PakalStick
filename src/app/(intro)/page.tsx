import dynamic from "next/dynamic"

const Wrap = dynamic(() =>import('./wrap'))
const page = () => {
  return <Wrap />
}

export default page