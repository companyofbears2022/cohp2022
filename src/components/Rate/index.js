import './index.scss'

export default function Rate({rate=3, max=5}) {
    
    const rateItems = []

    for( let i = 0; i < max; i ++ ) {
        if(i <= rate - 1) {
            rateItems.push(true)
        }
        else {
            rateItems.push(false)
        }
    }

    return (
        <div className="rate-container">
            {
                rateItems.map((itm, idx) => (
                    <span
                        key={idx}
                        className={
                        itm
                            ? 'rate-icon iconfont icon-xingxing_xuanzhong'
                            : 'rate-icon iconfont icon-jurassic_start'
                        }
                    />
                ))
            }
        </div>
    )
}