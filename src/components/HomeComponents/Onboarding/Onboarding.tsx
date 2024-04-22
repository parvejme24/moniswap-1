import BG_ONBOARDING from '../../../assets/bg-onboarding.png';
import RINGS from "../../../assets/rings.png";
import ROCKET from '../../../assets/rocket.png'
import DWON_ARROW from '../../../assets/down-arrow.png'

export default function Onboarding() {
  return (
    <div className="relative h-screen bg-center p-10" style={{ backgroundImage: `url(${BG_ONBOARDING})` }}>
      <img className=' mx-auto mb-10' src={DWON_ARROW} alt="" />

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-white text-center space-y-3">
          <img className='drag-none mx-auto' src={RINGS} alt="" />
          <p className="mt-2">Looking to get</p>
          <h2 className="text-3xl md:text-4xl italic font-semibold pb-8">Started on Moniswap?</h2>
          <div className='w-32 h-32 mx-auto rounded-full bg-gradient-to-b from-[#ffbf60] to-[#fcb415] flex items-center justify-center'>
            <div>
              <img className='mx-auto mb-2' src={ROCKET} alt="" />
              <span className='text-white'>Swap</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
