import React from 'react';

type SectionTitleProps = {
    children: React.ReactNode
}

export const SectionTitle = (props: SectionTitleProps) => {
    return (
        <h1 className="text-4xl border-l-8 border-green-600 p-4 ml-4">{props.children}</h1>
    )
}