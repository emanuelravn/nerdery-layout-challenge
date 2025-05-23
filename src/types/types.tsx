export type CardProps = {
    icon?: string
    title: string,
    createdAt: string,
    hasMore: boolean,
    width?: string,
    height?: string,
    margins?: {
        marginTopHeader: string,
        marginTopBody: string,
        marginTopDate: string,
        marginLeftCircle: string
    },
    dots?: boolean,
    circleBorderColor?: Array<string>,
    count?: string
}

export type RowCardProps = {
    iconColor: string,
    title: string,
    members: string,
    lastModified: string
}

export type DocumentItemProps = {
    iconColor: string,
    title: string,
    files: string,
    size: string
    isLast?: boolean
}