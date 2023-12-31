import type { Metadata } from 'next'
import React from 'react'
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry'
import './reset.css'

export const metadata: Metadata = {
    title: 'Prueba Técnica - Frontend',
    description: 'Prueba Técnica - Frontend',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    )
}
