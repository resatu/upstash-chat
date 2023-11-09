import Button from '@/components/ui/button';
import {FC} from 'react';

interface PageProps {}

const page : FC<PageProps> = ({}) => {
    return (
        <div>
            <a href="/"><Button>Back to Home</Button></a>
        </div>
    );
}

export default page;