import React from 'react'
import { FacebookIcon } from '../../../../assets/svg/messengers/FacebookIcon'
import { nanoid } from 'nanoid'
import { OkIcon } from '../../../../assets/svg/messengers/OkIcon'
import { VkIcon } from '../../../../assets/svg/messengers/VkIcon'
import { YoutubeIcon } from '../../../../assets/svg/messengers/YoutubeIcon'
import { InstagramIcon } from '../../../../assets/svg/messengers/InstagramIcon'

export const SocialMedia = () => {
    const socials = [
        {
            icon:FacebookIcon,
            href:"#",
            id:nanoid()
        },
        {
            icon:OkIcon,
            href:"#",
            id:nanoid()
        },
        {
            icon:VkIcon,
            href:"#",
            id:nanoid()
        },
        {
            icon:YoutubeIcon,
            href:"#",
            id:nanoid()
        },
        {
            icon:InstagramIcon,
            href:"#",
            id:nanoid()
        },
    ]
  return (
    <>
    <h1 className='mb-3'>Оставайтесь на связи</h1>
    <div className="flex gap-5">
        {socials.map(({icon: Icon,href}) => (
            <div className="rounded-full overflow-hidden p-1">
                <a href={href}>{<Icon/>}</a>
            </div>
        ))}
    </div>
    </>
  )
}
