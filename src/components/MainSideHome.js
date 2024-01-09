import { dummyData } from "../data/dummydata"

function MainSideHome() {

    console.log(dummyData);

    return (
        <div className="p-4">
            {/* {
                dummyData
                &&
                dummyData.map((elem, i) => {
                    return (
                        <div key={i}>
                            <div>{elem.name}</div>
                            {elem.applicationStatus === "edit" && <button>App Draft</button>}
                            {elem.applicationStatus === "newEdit" && <button>In complete</button>}
                            {elem.applicationStatus === "oldedit" && <button>Renew</button>}
                            {elem.applicationStatus === "futureEdit" && <button>Created</button>}
                        </div>
                    )
                })
            } */}

            <div className="w-[1128px] h-[229px] p-8 bg-white flex-col justify-start items-start gap-12 inline-flex">
                <div className="w-[118px] h-[34px] px-2 py-1 bg-rose-50 rounded justify-center items-center gap-2.5 inline-flex">
                    <div className="text-red-400 text-[21px] font-normal font-['Degular Demo'] leading-relaxed">13 Days left</div>
                </div>
                <div className="h-[39px] flex-col justify-start items-start gap-6 flex">
                    <div className="px-2 py-1 bg-zinc-200 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-sky-800 text-base font-normal font-['Degular Demo'] leading-tight"> New Certification</div>
                    </div>
                    <div className="px-2 py-1 bg-stone-50 rounded justify-center items-center gap-2.5 inline-flex">
                        <div><span className="text-gray-600 text-base font-normal font-['Degular Demo'] leading-tight">Certification Type -</span><span className="text-sky-800 text-base font-normal font-['Degular Demo'] leading-tight"> MBE</span></div>
                    </div>
                    <div className="flex-col justify-center items-start gap-3 flex">
                        <div className="w-[419px] text-blue-950 text-[28px] font-normal font-['Degular Demo']">ABC Corporation Ltd.</div>
                        <div className="text-slate-500 text-base font-normal font-['Degular Demo']">You have some fields remaining, please fill them for submission</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSideHome