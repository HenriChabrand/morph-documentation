import cn from 'clsx'
import Image from 'next/image'

export function Screenshot({ src, alt, full }) {
  return (
	<div
	  className={cn(
	    'flex justify-center -mb-4 mt-6 overflow-hidden rounded-xl border dark:border-zinc-800 bg-zinc-100',
	    full ? 'bg-white' : 'bg-zinc-100'
	  )}
	>
	  <Image
	    width={600}
	    height={200}
	    src={src}
	    alt={alt}
	    className={cn(
	      'w-auto select-none bg-white mx-auto',
	      full ? '' : 'ring-1 ring-gray-200'
	    )}
	  />
	</div>
  )
}