import { ConfigProvider, Table, theme } from "antd";
import type { TableProps, TablePaginationConfig } from "antd/es/table";

interface AntdTableProps<RecordType>
  extends Omit<TableProps<RecordType>, "pagination"> {
  dataSource: RecordType[];
  className?: string;
  columns: TableProps<any>["columns"];
  pagination?: false | TablePaginationConfig;
  loading?: boolean;
  onChange?: TableProps<RecordType>["onChange"];
  onRow?: TableProps<RecordType>["onRow"];
  footer?: any;
}

function AntdTable<RecordType extends object = any>({
  dataSource,
  className,
  columns,
  pagination,
  loading,
  onChange,
  onRow,
  ...restProps
}: AntdTableProps<RecordType>) {
  const expandableLoading = false;
  return (
    <ConfigProvider
      theme={{ algorithm: [theme.darkAlgorithm, theme.compactAlgorithm] }}
    >
      <Table
        className={className}
        size={"small"}
        loading={{
          indicator: <div></div>,
          spinning: loading ?? expandableLoading,
        }}
        locale={{
          emptyText: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ color: "var(--neutral-4)" }}>No data Found</div>
            </div>
          ),
        }}
        columns={columns}
        dataSource={dataSource}
        onChange={onChange}
        pagination={
          pagination !== false
            ? {
                ...pagination,
              }
            : false
        }
        onRow={onRow}
        {...restProps}
      />
    </ConfigProvider>
  );
}

export default AntdTable;
