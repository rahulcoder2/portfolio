import Projects from '../../../components/Projects'

export default function Projectsdata () {
  return (
    <div className='relative'>
        <div
        className='z-0 absolute h-[500px] top-[20%] bg-black-200 w-full -skew-y-12 left-0'
        />
        <Projects />
    </div>
  )
}