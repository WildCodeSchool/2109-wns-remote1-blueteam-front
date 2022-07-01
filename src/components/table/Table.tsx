import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow, { tableRowClasses } from '@mui/material/TableRow';
import TableSortLabel, {
  tableSortLabelClasses,
} from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import colors from '../../theme/colors';

// DATA DECLARATION

/* ------------------------ TABLE Styled() COMPONENTS -----------------------------*/
// TABLE STYLING
const StyledTableRow = styled(TableRow)(() => ({
  // base colors for items and hovering
  [`&:nth-of-type(odd)`]: {
    backgroundColor: alpha(colors.mainColor, 0.1),
  },
  [`&.${tableRowClasses.hover}:hover`]: {
    backgroundColor: alpha(colors.mainColor, 0.2),
  },

  // colors for selected items and their hovering
  [`&.${tableRowClasses.selected}, &.${tableRowClasses.selected}:nth-of-type(odd)`]:
    {
      backgroundColor: alpha(colors.warningColor, 0.1),
    },
  [`&.${tableRowClasses.selected}:hover`]: {
    backgroundColor: alpha(colors.warningColor, 0.2),
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: colors.mainColor,
    color: colors.light,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableSortLabel = styled(TableSortLabel)(() => ({
  [`&.${tableSortLabelClasses.active}`]: {
    color: colors.light,
    fontWeight: 'bold',
  },
  [`&.${tableSortLabelClasses.active}>svg`]: {
    fill: colors.light,
  },
}));

/* ------------------------ TABLE FUNCTIONS -----------------------------*/
//  ordering function
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface IEnhancedTableHeadProps<DataType> {
  headTitles: { [key in keyof DataType]?: keyof DataType };
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof DataType
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: keyof DataType;
  rowCount: number;
}

function EnhancedTableHead<DataType>(props: IEnhancedTableHeadProps<DataType>) {
  const {
    headTitles,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;

  interface HeadCell {
    id: keyof DataType;
    label: keyof DataType;
    numeric: boolean;
    disablePadding: boolean;
  }

  const headCells: readonly HeadCell[] = Object.keys(headTitles).map(
    (key: string) => {
      return {
        id: key as keyof DataType,
        label: key as keyof DataType,
        numeric: headTitles[key as keyof DataType] === 'number',
        disablePadding: typeof headTitles[key as keyof DataType] !== 'number',
      };
    }
  );

  const createSortHandler =
    (property: keyof DataType) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
            sx={{
              [`&, &.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]:
                {
                  color: colors.warningColor,
                },
            }}
          />
        </StyledTableCell>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id as React.Key}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <StyledTableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </StyledTableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface IEnhancedTableToolbarProps {
  numSelected: number;
  title: string;
}

const EnhancedTableToolbar = (props: IEnhancedTableToolbarProps) => {
  const { numSelected, title } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: () => alpha(colors.mainColor, 0.1),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon sx={{ color: colors.warningColor }} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

type DataWithId = {
  id: string | number;
  [key: string]: string | number;
};

export default function EnhancedTable<DataType extends DataWithId>(
  title: string,
  data: Array<DataType>
): ReactJSXElement {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof DataType>('id');
  const [selected, setSelected] = React.useState<readonly (string | number)[]>(
    []
  );
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof DataType
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = data.map(({ id }) => id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (
    event: React.MouseEvent<unknown>,
    id: string | number
  ) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly (string | number)[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: string | number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const initialArr: { [key in keyof DataType]?: keyof typeof data[0] } = {};
  const headTitles = Object.keys(data[0]).reduce(
    (
      arr: { [key in keyof DataType]?: keyof typeof data[0] },
      dataKey: string
    ): { [key in keyof DataType]?: keyof typeof data[0] } => {
      // rule disabled because it is the way reduce() works and the spread work around needlessly induces performance issues.
      // eslint-disable-next-line no-param-reassign
      arr[dataKey as keyof DataType] =
        typeof data[0][dataKey as keyof DataType];
      return arr;
    },
    initialArr
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} title={title} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              headTitles={headTitles}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                      rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${row.id}`;

                  return (
                    <StyledTableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <StyledTableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                          sx={{
                            [`&, &.${checkboxClasses.checked}`]: {
                              color: colors.warningColor,
                            },
                          }}
                        />
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align={typeof row.id === 'number' ? 'right' : 'left'}
                      >
                        {row.id}
                      </StyledTableCell>
                      {Object.values(row).map((property) => {
                        if (property !== row.id) {
                          return (
                            <StyledTableCell
                              align={
                                typeof property === 'number' ? 'right' : 'left'
                              }
                              key={`${row.id}${property}`}
                            >
                              {property}
                            </StyledTableCell>
                          );
                        }
                        return null;
                      })}
                    </StyledTableRow>
                  );
                })}
              {emptyRows > 0 && (
                <StyledTableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <StyledTableCell colSpan={100} />
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
