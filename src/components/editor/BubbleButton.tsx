import { ReactNode, ComponentProps } from "react";

export interface BubbleButtonProps extends ComponentProps<'button'> {
    children: ReactNode
}

export function BubbleButton(props: BubbleButtonProps){
    return (
        <button className='p-2 text-zinc-800
         font-semibold items-center flex gap-1 
         leading-none hover:bg-slate-300
          data-[active=true]:text-fuchsia-400
         data-[active=true]:bg-violet-100
         data-[active=true]:hover:bg-slate-300' 
        {...props}
        />
    )
}