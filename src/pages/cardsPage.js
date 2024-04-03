import React, { Component } from 'react'
import Button from '../components/button'
import Card from '../components/card'


export const CardPage = () => {
    return (
        <div className='w-full h-full flex flex-wrap p-2 overflow-auto'>
            <div className='w-full h-fit flex flex-wrap my-4 gap-4 justify-center'>
                <Card variant="withImage" size="small" imagePath="/logo192.png" title='Hello' desc='asdads'>
                    {/* Content */}
                </Card>
                <Card variant="withImage" size="small" imagePath="/logo192.png" title='Hello' desc='asdads'>
                    {/* Content */}
                </Card>
                <Card variant="withImage" size="small" imagePath="/logo192.png" title='Hello' desc='asdads'>
                    {/* Content */}
                </Card>
                <Card variant="withImage" size="small" imagePath="/logo192.png" title='Hello' desc='asdads'>
                    {/* Content */}
                </Card>
                <Card variant="withImage" size="small" imagePath="/logo192.png" title='Hello' desc='asdads'>
                    {/* Content */}
                </Card>
            </div>

            <div className='w-full h-fit flex flex-wrap my-4'>
                <Card variant="withImage" size="medium" imagePath="/logo192.png" title='Hello' desc='asdads'>
                    {/* Content */}
                </Card>
                <Card variant="withImage" size="medium" imagePath="/logo192.png" title='Hello' desc='asdads'>
                    {/* Content */}
                </Card>
                <Card variant="withImage" size="medium" imagePath="/logo192.png" title='Hello' desc='asdads'>
                    {/* Content */}
                </Card>
            </div>
            <div className='w-full h-fit flex flex-wrap my-4'>
                <Card variant="withImage" size="large" imagePath="/logo192.png" title='Hello' desc='asdads'>
                    {/* Content */}
                </Card>
                <Card variant="withImage" size="large" imagePath="/logo192.png" title='Hello' desc='asdads'>
                    {/* Content */}
                </Card>
            </div>
        </div>
    )
}