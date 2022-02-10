function Header(){
    let title ="";
    const client ="Headero";

    if (client=="Headero") {
        title ="Header Header Header";
    }else{
        title ="ohoooo";
    }
return(

<div className="navbar bg-primary">
<h1 className="text-white">{title}</h1>
</div>

);
}

export default Header;