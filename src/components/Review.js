import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useSelector, useDispatch } from "react-redux";

export default function Review() {
  const data = useSelector((state) => state.data);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        summary
      </Typography>
      <List disablePadding>
        <ListItem key={data.projectNumber} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"projectNumber"} />
          <Typography variant="body2">{data.projectNumber}</Typography>
        </ListItem>
        <ListItem key={data.name} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Name"} />
          <Typography variant="body2">{data.name}</Typography>
        </ListItem>
        <ListItem key={data.description} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"description"} />
          <Typography variant="body2">{data.description}</Typography>
        </ListItem>
        <ListItem key={data.collectionChain} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"collectionChain"} />
          <Typography variant="body2">{data.collectionChain}</Typography>
        </ListItem>
        <ListItem key={data.collectionAddress} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"collectionAddress"} />
          <Typography variant="body2">{data.collectionAddress}</Typography>
        </ListItem>
        <ListItem key={String(data.startDate)} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"startDate"} />
          <Typography variant="body2">{data.startDate}</Typography>
        </ListItem>
        <ListItem key={String(data.endDate)} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"endDate"} />
          <Typography variant="body2">{data.endDate}</Typography>
        </ListItem>
        <ListItem key={data.currentProject} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"currentProject"} />
          <Typography variant="body2">{String(data.currentProject)}</Typography>
        </ListItem>
        <ListItem key={data.twitterPostId} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"twitterPostId"} />
          <Typography variant="body2">{data.twitterPostId}</Typography>
        </ListItem>
        <ListItem key={data.twitterPartnerId} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"twitterPartnerId"} />
          <Typography variant="body2">{String(data.twitterPartnerId)}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"achievments"} />
          <Typography variant="body2">{String(data.achievments)}</Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
