import { Chip, useTheme } from "@mui/material";

type ChipListProps = {
    items: { name: string, link: string }[]
}

const ChipList = (props: ChipListProps) => {
    const theme = useTheme();

    const handleChipClick = (link: string) => {
        window.location.href = link;
    };

    return (
        <div>
            {props.items.map((item, index) => (
                <Chip
                    key={index}
                    label={item.name}
                    component="a"  // Use anchor element
                    target="_blank"  // Open link in a new tab
                    href={item.link || '#'}  // Set the link URL
                    sx={{ margin: '0.5rem', bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}
                />
            ))}
        </div>
    );
}

export default ChipList;