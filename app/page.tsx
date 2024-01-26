import Tag from '@kiwicom/orbit-components/lib/Tag';
import Badge from '@kiwicom/orbit-components/lib/Badge';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import Box from '@kiwicom/orbit-components/lib/Box';
import List, { ListItem } from '@kiwicom/orbit-components/lib/List';

export default function Orbit() {
  return (
    <Box padding="large">
      <Stack as="main" direction="column" spacing="large">
        <Tag type="colored" selected>
          Tag
        </Tag>
        <Badge type="warning">Badge</Badge>
        <Box className="[&_.orbit-list-item]:border-b-2 [&_.orbit-list-item]:border-blue-dark last:[&_.orbit-list-item]:border-0">
          <List>
            <ListItem>test</ListItem>
            <ListItem>test</ListItem>
            <ListItem>test</ListItem>
            <ListItem>test</ListItem>
          </List>
        </Box>
      </Stack>
    </Box>
  );
}
