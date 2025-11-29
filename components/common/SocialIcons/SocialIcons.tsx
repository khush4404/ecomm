import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export const SocialIcons = () => {
    return (
        <div className="flex justify-center items-center gap-5 leading-[50px] mt-5">
            <span>Share:</span>
            <Facebook className="size-4 fill-black" />
            <Twitter className="size-4 fill-black" />
            <Linkedin className="size-4 bg-black text-white p-0.5 rounded-sm stroke-3" />
            <Instagram className="size-4 bg-black text-white p-0.5 rounded-sm stroke-3" />
        </div>
    )
}
