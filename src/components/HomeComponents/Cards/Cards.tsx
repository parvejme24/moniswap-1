import CARD_LOGO from "../../../assets/cardLogo.png"
import LIQUIDITY from "../../../assets/cardImage/liquidity.png";
import PROTOCOLS from "../../../assets/cardImage/protocols.png";
import TRADERS from "../../../assets/cardImage/traders.png";
import VOTERS from "../../../assets/cardImage/voters.png";


export default function Cards() {

  const items = [
    {
      id: 1,
      title: "Traders",
      description: "Exchange tokens with minimal slippage and pay some of the most competitive fees to MONI lockers.",
      cardImage: TRADERS
    },
    {
      id: 2,
      title: "Liquidity Providers",
      description: "Deposit the tokens utilized for trading on Moniswap and earn MONI emissions as incentives.",
      cardImage: LIQUIDITY
    },
    {
      id: 3,
      title: "Protocols",
      description: "Provide incentives to veMONI voters, encouraging the attraction of votes and MONI emissions to their pools, enabling the cost-effective establishment of liquidity.",
      cardImage: PROTOCOLS
    },
    {
      id: 4,
      title: "veMONI Voters",
      description: "Cast your vote to determine the pools that will accrue MONI emissions, and earn 100% of incentives and fees for the selected pools. Any MONI holder has the option to lock their tokens and convert them into veMONI.",
      cardImage: VOTERS
    },
  ]

  return (

    <div className="container mx-auto py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          items.map(item => <div key={item.id} className=" mx-10 md:mx-5 lg:mx-0 text-white">
            <div className=" bg-[#1E1E1E] p-5  rounded-tl-[15px] rounded-tr-[15px] h-[246px]">
              <span className=" flex justify-between items-center ">
                <h3 className=" text-xl">{item?.title}</h3>
                <img src={CARD_LOGO} alt="" />
              </span>
              <p className=" pt-3 text-sm text-[#CFCFCF]">{item?.description}</p>

            </div>
            <div className=" bg-[#FFB443] rounded-bl-[15px] rounded-br-[15px] h-[246px]">
              <img src={item?.cardImage} alt={item?.title} />
            </div>
          </div>)
        }
      </div>
    </div>
  )
}
