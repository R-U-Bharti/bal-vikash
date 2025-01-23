import React from 'react'
import FadeInUp from './FadeInUp'
import Waves from './bits/Waves'

const PageHeader = ({ title }) => {
    return (
        <FadeInUp className={'relative py-5 md:py-10 text-center text-3xl md:text-5xl font-semibold'}>
            {title}
            <Waves
                lineColor="#fff"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
            />
        </FadeInUp>
    )
}

export default PageHeader