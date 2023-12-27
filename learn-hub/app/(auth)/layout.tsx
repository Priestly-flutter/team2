const AuthLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return(
        <div className="h-full flexitems-center justify-center">
            {children}
        </div>
    )
}