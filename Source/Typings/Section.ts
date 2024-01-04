
export type { WithRendered , WithSections , Sections }


interface Sections {
    section_url ?: string
    sections : string | Array<string>
}

type WithRendered = {
    sections ?: Record<string,string>
}


type WithSections = {} | Sections
