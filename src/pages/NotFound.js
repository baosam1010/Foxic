import notFound from './../assets/images/notfound.jpg';


function NotFound() {
    return (
        <div className="max-w-7xl m-auto">
            <div className="flex flex-col items-center mb-20">
                <img className="w-96 h-auto" src={notFound} alt="notFound" />
                <h3 className="font-bold text-3xl">Page not found</h3>
            </div>
        </div>
    )
}

export default NotFound;




