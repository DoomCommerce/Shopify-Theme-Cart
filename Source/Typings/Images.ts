
export { WithThumbnail , NoImage , Image }

interface Image {
    aspect_ratio : number
    height : number
    width  : number
    alt : string
    src : string
}


interface NoImage {
    aspect_ratio : null
    height : null
    width  : null
    alt : null
    src : null
}


type WithThumbnail = {
    featured_image : Image
    image : string
} | {
    featured_image : NoImage
    image : null
}
