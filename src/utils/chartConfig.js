export function lineChartConfig(xField, yField, theme, seriesField=undefined, colorField=undefined) {
        return {
        // data: hitRateData,
        autoFit: true,
        xField: xField,
        yField: yField,
        shapeField: 'smooth',
        seriesField: seriesField,
        // 曲线颜色
        colorField: colorField,
        scale: { color: { range: ['#FAAD14', '#F4664A'] } },
        // scale: { y: { domainMin: 0 } },
        interaction: { 
            tooltip: {
                marker: true,
            },
            
        },
        
        style: { lineWidth: 2 },
        theme: { type: theme },
        
    };
}