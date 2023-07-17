import React, { Children, cloneElement, useEffect, useState } from 'react';
import module from '../Slider/Slider.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = (props) => {
    const [items, setItems] = useState([]);
    const [list, setList] = useState(0);
    const [offset, setOffset] = useState(0);
    const PAGE_WIDTH = 860;
    const maxOffset = -(PAGE_WIDTH * (items.length - 1))
    const minOffset = 0
    let active = document.getElementsByClassName(module.ellipse)

    const check = (index) => {
        for (let i = 0; i < active.length; i++) {
            active[i].classList.remove(module.active)
        }
        active[index].classList.add(module.active)
        console.log(PAGE_WIDTH)
        setList(() => {
            return index
        })
    }

    const handlerClickLeftArrow = () => {
        console.log("left")
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH
            console.log(newOffset)
            return (newOffset > 0) ? maxOffset : newOffset
        })
        setList((currentlist) => {
            let newList = currentlist - 1
            newList = (newList >= 0) ? newList : 7
            console.log(newList)
            check(newList)
        })
    }
    const handlerClickRightArrow = () => {
        console.log("right")
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH
            console.log(newOffset)
            return (newOffset < maxOffset) ? minOffset : newOffset
        })
        setList((currentlist) => {
            let newList = currentlist + 1
            newList = (newList <= 7) ? newList : 0
            console.log(newList)
            check(newList)
        })

    }

    useEffect(() => {
        for (let i = 0; i < active.length; i++) {
            active[i].addEventListener("click", () => {
                setOffset(-(PAGE_WIDTH * i))
                check(i)
            })
        }
        setItems(
            Children.map(props.children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`
                    }
                })
            })
        )
    }, [])
    return (
        <div className={module.container}>
            <FaChevronLeft className={module.arrow} onClick={handlerClickLeftArrow} />
            <div className={module.window}>
                <div className={module.allItems}
                    style={{
                        transform: `translateX(${offset}px)`
                    }}
                >
                    {items}
                </div>
            </div>
            <div className={module.ellipses}>
                <ul>
                    <li className={module.ellipse + ' ' + module.active}></li>
                    <li className={module.ellipse}></li>
                    <li className={module.ellipse}></li>
                    <li className={module.ellipse}></li>
                    <li className={module.ellipse}></li>
                    <li className={module.ellipse}></li>
                    <li className={module.ellipse}></li>
                    <li className={module.ellipse}></li>
                </ul>
            </div>
            <FaChevronRight className={module.arrow} onClick={handlerClickRightArrow} />
        </div>
    );
};

export default Slider;