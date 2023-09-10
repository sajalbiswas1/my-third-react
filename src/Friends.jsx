export default function SingelFriend({load}){
    return (
        <div className="box">
            <h3>Name: {load.name}</h3>
            <p>Email: {load.email}</p>
        </div>
    )
}