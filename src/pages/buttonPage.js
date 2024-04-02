import React, { Component } from 'react'
import Button from '../components/button'

export const ButtonPage = () => {
    return (
        <div className='w-full h-full flex gap-4'>
            <Button variant={'outline'} size={'small'} animation={'loading'} >Button</Button>
            <Button variant={'outline'} size={'default'} >Button </Button>
            <Button variant={'outline'} size={'big'}>Button </Button>
            <Button variant={'default'} size={'small'}>Button</Button>
            <Button variant={'default'} size={'default'} >Button </Button>
            <Button variant={'default'} size={'big'}>Button </Button>
            <Button variant={'white'} size={'small'}>Button</Button>
            <Button variant={'white'} size={'default'} >Button </Button>
            <Button variant={'white'} size={'big'}>Button </Button>
            <button className='bg-red-400 h-fit w-fit p-2 rounded' >hi</button>
        </div>
    )
}