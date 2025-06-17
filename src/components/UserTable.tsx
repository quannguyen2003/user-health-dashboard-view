
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Edit, Trash2 } from "lucide-react"

const users = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    email: "nguyenvanan@email.com",
    age: 45,
    diseases: ["Tiểu đường", "Cao huyết áp"],
    status: "active",
    lastVisit: "2024-06-15"
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    email: "tranthibinh@email.com",
    age: 32,
    diseases: ["Hen suyễn"],
    status: "active",
    lastVisit: "2024-06-14"
  },
  {
    id: 3,
    name: "Lê Minh Châu",
    email: "leminhchau@email.com",
    age: 28,
    diseases: ["Viêm gan B", "Thiếu máu"],
    status: "inactive",
    lastVisit: "2024-06-10"
  },
  {
    id: 4,
    name: "Phạm Thị Dung",
    email: "phamthidung@email.com",
    age: 55,
    diseases: ["Tim mạch", "Đau khớp"],
    status: "active",
    lastVisit: "2024-06-16"
  },
  {
    id: 5,
    name: "Hoàng Văn Em",
    email: "hoangvanem@email.com",
    age: 38,
    diseases: ["Dạ dày"],
    status: "active",
    lastVisit: "2024-06-13"
  }
]

export function UserTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">
          Danh sách người dùng
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Tên</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Tuổi</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Bệnh</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Trạng thái</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Lần cuối</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-4">
                    <div className="font-medium text-gray-900">{user.name}</div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{user.email}</td>
                  <td className="py-4 px-4 text-gray-600">{user.age}</td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1">
                      {user.diseases.map((disease, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {disease}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge 
                      variant={user.status === 'active' ? 'default' : 'secondary'}
                      className={user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                    >
                      {user.status === 'active' ? 'Hoạt động' : 'Không hoạt động'}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{user.lastVisit}</td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4 text-blue-600" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4 text-green-600" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
