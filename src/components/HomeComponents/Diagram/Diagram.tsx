import DIAGRAM from '../../../assets/diagram.png'

export default function Diagram() {
  return (
    <div>
      <div className='text-center space-y-8'>
        <h2 className='text-white italic text-4xl'>How It Works</h2>
        <p className='text-[#cfcfcf]'>Crafted to incentivize contributors fostering the sustainable expansion of the protocol.</p>
      </div>
      <div>
        <img className='mx-auto mt-14 drag-none' src={DIAGRAM} alt="" />
      </div>
    </div>
  )
}
