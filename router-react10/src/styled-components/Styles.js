import styled from 'styled-components';
const Styles = styled.div`
    width:1000px;
    margin-left:auto;
    margin-right:auto;
    .container div{
        width:180px;
        margin-top:20px;
        box-shadow: 0px 1px 11px -3px #333;
    }
    img{
        width:160px;
        padding:10px;
        height:190px;
    }
    .nav{
        width:100%;
        height:50px;
        background-color:rgba(226,224,224,0.5);
        display:flex;
    }
    .nav div{
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:20px;
    }
    a{
        text-decoration:none;
        color:#333;
    }
    .container{
        display:flex;
        width:100%;
        justify-content:space-between;
        flex-wrap:wrap;
    }
    .container p{
        padding:10px;
        margin:0px;
    }
    .content img{
        width:300px;
        height:350px;
    }
    .content{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
    }
`
export default Styles
