import { Chip, useTheme } from "@mui/material";

type ChipListProps = {
    items: string[]
}

const ChipList = (props: ChipListProps) => {
    const theme = useTheme()
    return (
        <div>
            {props.items.map((skill: string, index: number) => (
                <Chip key={index} label={skill} sx={{ margin: '0.5rem', bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} />
            ))}
        </div>
    );
}

export default ChipList