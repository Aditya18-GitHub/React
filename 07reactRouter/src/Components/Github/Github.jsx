
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();
    // const [data,setdata] = useState([])
    // useEffect(() => {

    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res) => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setdata(data)
    //     })


    // },[])


    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            GitHub Followers : {data.followers}
            <div className="flex justify-center mt-5">
                <img src={data.avatar_url} alt="img" className="w-[20rem] "/>
            </div>
        </div>
    );
}

export default Github;



export const githubinfoloader = async () => {
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')

    return res.json();
}