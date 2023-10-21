const Locations = () => {
    return (
        <div id="locations" className="text-sweetblue md:py-20 py-10">
            <h1 className="md:text-6xl text-3xl text-center md:pb-5">Locations</h1>

            <div className="w-full inline-flex pl-28 flex-nowrap pt-10 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="md:grid md:grid-cols-3 flex w-full items-center justify-center [&_li]:mx-2 animate-infinite-scroll">
                    <li className="md:text-3xl text-lg text-center px-10">
                        Los Angeles
                    </li>
                    <li className="md:text-3xl text-lg text-center px-10">
                         San Bernardino
                    </li>
                    <li className="md:text-3xl text-lg text-center px-10">
                        Hollywood
                    </li>
                </ul>                
                <ul className="grid grid-cols-3 w-full items-center justify-center [&_li]:mx-2 animate-infinite-scroll">
                    <li className="md:text-3xl text-lg text-center px-10">
                        Inglewood
                    </li>
                    <li className="md:text-3xl text-lg text-center px-10">
                        Koreatown
                    </li>
                    <li className="md:text-3xl text-lg text-center px-10">
                        Northridge
                    </li>
                </ul>                           
            </div>
        </div>
    )
}

export default Locations; 