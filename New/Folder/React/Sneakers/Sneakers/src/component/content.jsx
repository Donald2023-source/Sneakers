import { useEffect, useState } from "react"
const Content = () => {

    const [currImage, setCurrentImage] = useState('')

    const images = [
        {src: 'src/assets/image-product-1.jpg'},
        {src: 'src/assets/image-product-2.jpg'},
        {src: 'src/assets/image-product-3.jpg'},
        {src: 'src/assets/image-product-4.jpg'},
    ]
    const[num, setNum] = useState(1)

    const arrayToImage = (index) => {
        return images[index].src
    }

    const setImage = (index) => {
        if(!index) { index = 0 }
        setCurrentImage(arrayToImage(index))
    }

    
    
    const isValid = (action) => {
        switch (action) {
            case 'increase':
                console.log(num)
                if(num === 10) 
                
                {
                    return false
                } 
                
                return true

              case 'decrease':
                console.log(num)
                if(num === 1) 
                
                {
                    return false
                } 
               
                return true
        
            default:
                return true
        }
    }

    const increaseNumber = () => {
        isValid('increase')? setNum(num+1) :
        console.log("Minimum value reached")
    }

    const decreaseNumber = () => {
        isValid('decrease')? setNum(num-1) :
        console.log("Minimum value reached")
    }


    return(
        <>
        
        <div className="lg:flex lg:flex-row sm:flex flex-col justify-center mx-auto">
        <slider>
            <div className="images ">
                 <img className="sm:w-full lg:h-96 rounded-xl md:w-96 mx-auto mt-8" src={currImage} alt="" />
                 <div className="thumbnail hidden lg:flex py-4 justify-center gap-5 md:flex">
                 
                 {images.map( (singleImage, i) => {
                    return(<img className="h-20 rounded-xl" src={singleImage.src} alt="" />)
                 })}
                 
                 
                 </div>
                
            </div>
            </slider>
        

        <div className=" px-2 lg:py-14 py-20 md:px-32">
            <h4 className="text-sm text-orange-500">SNEAKER COMPANY</h4>

            <div className="py-4">
                <h1 className="text-4xl font-bold w-96">Fall Limited Edition Sneakers</h1>

                <div>
                <p className="w-96 text-xl py-6">These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer
                </p>
                <h2 className="font-bold text-xl">$125.00</h2>
                 <h3 className="line-through text-gray-400">$250.00</h3>

            <div className="flex gap-16 items-center">
                 <div className="flex border-2 rounded gap-4 border-gray-100 w-20 justify-between items-center mt-4">
                    <button onClick={decreaseNumber} className="text-2xl text-orange-600 px-4 py-1 bg-orange-300 rounded">-</button>
                    <h1>{ num }</h1>
                    <button onClick={increaseNumber} className="text-2xl text-orange-600 px-4 py-1 bg-orange-300 rounded">+</button>

                 </div>
                    <button className="bg-orange-600 rounded border-none h-10 px-9 mt-4 text-white">Add to cart</button>
                 </div>
                </div>
            </div>
        </div>
        </div>

        </>
    )
}
export default Content