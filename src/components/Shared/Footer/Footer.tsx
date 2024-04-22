import CERTIK from '../../../assets/image 7.png'
import RING from '../../../assets/ring.png'
import TELIGRAM from "../../../assets/icons/telegram-hover.8e70fed7 5.png"
import X from "../../../assets/icons/X.png"
import DISCORD from "../../../assets/icons/discord.png"
import GITHUB from "../../../assets/icons/github.png"
import MEDIAM from "../../../assets/icons/github.png"
import ROCKET from '../../../assets/rocket.png'

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <div className='w-full bg-[#0E0E0F] border-t border-[#403B3B] px-10 mt-24 rounded-tl-[100px] rounded-tr-[100px]'>
      {/* main footer  */}
      <div className='w-full pt-16 flex justify-between flex-col md:flex-row gap-5'>
        {/* first item  */}
        <div className='order-2 md:order-1'>
          <div className='flex  items-center gap-2 justify-center md:justify-start'>
            <img src={RING} alt="" />
            <span className='font-bold text-2xl italic bg-gradient-to-r from-[#FFBF60] to-[#FC8415] bg-clip-text text-transparent'>MONISWAP</span>
          </div>
          <div className='mt-8 md:mt-20 text-center md:text-left space-y-2'>
            <h4 className='italic uppercase text-white text-xl'>AUDITED BY</h4>
            <img className='mx-auto md:mx-0' src={CERTIK} alt="" />
          </div>
        </div>

        {/* second item  */}
        <div className='max-w-3xl w-3xl mx-auto space-y-4 order-1 md:order-2'>
          <h4 className='italic uppercase text-white text-xl text-center'>DON'T MISS THE GOOD NEWS</h4>
          <h2 className='text-3xl italic text-white text-center'>Subscribe to Our Newsletter</h2>
          <div className='mx-auto space-y-3 md:space-y-0 text-center md:text-left'>
            <input type="email" placeholder='Your@email.com' className=' bg-[#1E1E1E] px-3 py-2 rounded-full w-[329px]' />
            <button className="ml-2 px-3 py-2 rounded-full w-[137px]" style={{ background: 'linear-gradient(90deg, #FFBF60, #FC8415)', border: 'none', color: 'white', cursor: 'pointer' }}>Subscribe</button>
          </div>

          <div className='text-white md:flex justify-between pt-8 text-center md:text-left space-y-8 md:space-y-0'>
            <div>
              <h4>Company</h4>
              <ul className='text-sm text-[#cfcfcf] mt-2 space-y-2'>
                <li>About Moniswap</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div className='text-ceter md:text-left'>
              <h4>Project & Developers</h4>
              <ul className='text-sm text-[#cfcfcf] mt-2 space-y-2'>
                <li>Submit Your Project</li>
                <li>Partner</li>
              </ul>
            </div>
          </div>
        </div>

        {/* third item  */}
        <div className=' order-3 md:order-3'>
          <div className='w-32 h-32 mx-auto rounded-full bg-gradient-to-b from-[#ffbf60] to-[#fcb415] flex items-center justify-center'>
            <div>
              <img className='mx-auto mb-2' src={ROCKET} alt="" />
              <span className='text-white'>Swap</span>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom  */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-center py-5 mt-5">
        <p className="text-[#cfcfcf] text-sm text-center md:text-left">Copyright &copy; {currentYear} Moniswap. All rights reserved.</p>
        <div className="flex gap-2">
          <img className="p-3 bg-[#000000] rounded-xl" src={TELIGRAM} alt="teligram" />
          <img className="p-3 bg-black rounded-xl" src={X} alt="X" />
          <img className="p-3 bg-black rounded-xl" src={DISCORD} alt="DISCORD" />
          <img className="p-3 bg-black rounded-xl" src={GITHUB} alt="GITHUB" />
          <img className="p-3 bg-black rounded-xl" src={MEDIAM} alt="MEDIAM" />
        </div>

      </div>
    </div>
  )
}
