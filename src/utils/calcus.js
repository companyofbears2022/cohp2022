export function calcuHitRate(ranges, coe, hitRate, movDec, type1, type2, showMov=true) {
    const d_coe = 240000
    const coes = ranges.map((distance) => ((-1)*coe*distance*distance+d_coe))

    const hitRates = []

    for( let i = 0; i < ranges.length; i++ ) {
        hitRates.push({
            dist: ranges[i],
            value: Math.round(((coes[i] / d_coe) * (1 - hitRate)) * 100),
            type: type1
        })
        if(showMov) {
                hitRates.push({
                dist: ranges[i],
                value: Math.round(((coes[i] / d_coe) * (1 - hitRate - movDec)) * 100),
                type: type2
            })
        }
    }

    // console.log(hitRates);
    
    return hitRates
}

export function calcuPenetration(range, coe, pene, type) {
  const step = range / 5; // 6 个元素，5 个差值
  const ranges = Array.from({ length: 6 }, (_, i) => Math.round(i * step))
  
  const penes = []
  for( let i = 0; i < ranges.length; i++ ) {
    penes.push({
        dist: ranges[i],
        value: Math.round((coe * (-0.001) * (ranges[i] * ranges[i] - (100*ranges[i] + 2500)) + pene)),
        type
    })
}

return penes
}


export function mapThickToRem(value) {
    if (value < 1) value = 1;
    if (value > 400) value = 400;

    const rem = 0.1 + (value - 1) * (2 - 0.1) / (400 - 1);

    return rem.toFixed(1) + 'rem';
}
