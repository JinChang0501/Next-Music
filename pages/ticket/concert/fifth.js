import React, { useEffect, useRef } from 'react'
import WhiteLayout from '@/components/layout/ticket-layout/desktopLayout/whiteLayout'
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import { PieChart } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

export default function Fifth() {
  const chartRef = useRef(null) // Ref for the chart container

  useEffect(() => {
    // Initialize echarts
    echarts.use([
      TitleComponent,
      TooltipComponent,
      LegendComponent,
      PieChart,
      CanvasRenderer,
      LabelLayout,
    ])

    // Get the chart DOM element
    const chartDom = chartRef.current
    if (!chartDom) return

    // Initialize echarts instance
    const myChart = echarts.init(chartDom)

    // Set options for the chart
    const option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    }

    // Set chart options
    myChart.setOption(option)

    // Clean up on component unmount
    return () => {
      myChart.dispose()
    }
  }, [])

  return <div ref={chartRef} style={{ width: '100%', height: '838px' }}></div>
}

// Set layout for the page
Fifth.getLayout = function getLayout(page) {
  return <WhiteLayout title="finish">{page}</WhiteLayout>
}
