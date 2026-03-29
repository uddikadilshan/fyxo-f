"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"

export default function ProductMeasurementUI() {
  return (
    <div className="p-6 space-y-6 bg-white border rounded-2xl shadow-sm">
      {/* HEADER */}
      <div>
        <h2 className="text-xl font-semibold">Product Measurements</h2>
        <p className="text-sm text-muted-foreground">
          Manage measurement units for products
        </p>
      </div>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <Input placeholder="Measurement Name (e.g. KG, Litre, Unit)" />

        <div className="flex items-center gap-3">
          <Switch defaultChecked />
          <span className="text-sm">Active</span>
        </div>

        <div>
          <Button className="w-full md:w-auto">
            Add Measurement
          </Button>
        </div>
      </div>

      {/* TABLE */}
      <div className="border rounded-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead>Measurement Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {/* Row 1 */}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>KG</TableCell>
              <TableCell>
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  Active
                </span>
              </TableCell>
              <TableCell className="text-right">
                <Switch defaultChecked />
              </TableCell>
            </TableRow>

            {/* Row 2 */}
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Litre</TableCell>
              <TableCell>
                <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                  Inactive
                </span>
              </TableCell>
              <TableCell className="text-right">
                <Switch />
              </TableCell>
            </TableRow>

            {/* Row 3 */}
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Unit</TableCell>
              <TableCell>
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  Active
                </span>
              </TableCell>
              <TableCell className="text-right">
                <Switch defaultChecked />
              </TableCell>
            </TableRow>

            {/* Empty State */}
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center text-muted-foreground py-6"
              >
                More measurements will appear here...
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}