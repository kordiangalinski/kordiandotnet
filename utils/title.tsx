const Title_Path = "~/usr/KordianGaliński | ";

const Title = ({children}: any) => {
    const title = Title_Path + children;
    return(
        <title>{title}</title>
    )
}

export default Title;