"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function ProductsPage() {
  const router = useRouter()

  const [search, setSearch] = useState("")
  const [products, setProducts] = useState([
    { id: "1", productCode: "P001", productName: "Laptop", category: "Electronics", active: true },
    { id: "2", productCode: "P002", productName: "Phone", category: "Electronics", active: false },
    { id: "3", productCode: "P003", productName: "Shoes", category: "Fashion", active: true },
  ])

  const handleDelete = (id: string) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  const filteredProducts = products.filter(
    (p) =>
      p.productCode.toLowerCase().includes(search.toLowerCase()) ||
      p.productName.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {/* Search row */}
      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Search by code, name, or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Button variant="outline" onClick={() => setSearch("")}>
          Clear
        </Button>
      </div>

      {/* Data Table */}
      <div className="border rounded">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Code</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.productCode}</TableCell>
                <TableCell>{p.productName}</TableCell>
                <TableCell>{p.category}</TableCell>
                <TableCell>{p.active ? "Yes" : "No"}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => router.push(`/main/product/${p.id}`)}
                  >
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => router.push(`/main/product/${p.id}?edit=true`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
