import React, {useState} from 'react';
import PropTypes from 'prop-types';
interface propsTestComponent {
    title:string;
}
const NeonActiveShape = ({title }: propsTestComponent) => {
    const [isHover,setIsHover]=useState(true);
    const hovered= ()=>{
        setIsHover(!isHover);
    }
    return (
        <div className={'w-[inherit] h-[inherit] relative rounded-[inherit]'} onMouseEnter={()=>{hovered()}} onMouseLeave={()=>{hovered()}}>
            {isHover?
                <div className={'w-[inherit] h-[inherit] relative flex items-center justify-items-center justify-center rounded-[inherit]'}>
                    <div className={'z-[4] w-[99%] absolute flex h-[99%] rounded-[inherit] border-white border-solid border-[1px] m-[1%]'}></div>
                    <h2 className={'z-[3] my-auto absolute flex text-[inherit] filter-none text-white font-gilroy font-medium'}>{title}</h2>
                    <div className={'relative inline-block flex justify-center justify-items-center blur-[1px] rounded-[inherit] h-full w-full'}>
                        <div className={'opacity-[0.4] z-[2] absolute w-full h-full rounded-[inherit] neon-border-button'}></div>
                        <div className={'z-[1] absolute w-full h-full border-[3px] rounded-[inherit] neon-border'}></div>
                    </div>
                </div> :
                <div className={'w-[inherit] h-[inherit] relative flex items-center justify-items-center justify-center rounded-[inherit]'}>
                    <div className={'z-[4] w-[99%] absolute flex h-[99%] rounded-[inherit] neon-white-border border-solid border-[1px] m-[1%]'}></div>
                    <h2 className={'z-[3] my-auto absolute flex text-[inherit] filter-none text-white font-gilroy font-medium'}>{title}</h2>
                    <div className={'relative inline-block flex justify-center justify-items-center blur-[1px] rounded-[inherit] h-full w-full'}>
                        <div className={'opacity-[0.25] z-[2] absolute w-full h-full rounded-[inherit] neon-border-button'}></div>
                        <div className={'z-[1] absolute w-full h-full border-[3px] rounded-[inherit] neon-border'}></div>
                    </div>
                </div>}

        </div>
    );
};
export default NeonActiveShape;
