import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const coreMembers = {
  management: [
    {
      image: "/work1.png",
      name: "John Doe",
      year: "3rd Year",
      department: "Computer Science",
      description: "Managing the club's overall operations and ensuring smooth functioning."
    },
    {
      image: "/work1.png",
      name: "Jane Smith",
      year: "4th Year",
      department: "Electrical Engineering",
      description: "Oversees the financial planning and coordination for events."
    }
  ],
  advisors: [
    {
      image: "/work1.png",
      name: "Alice Johnson",
      year: "Faculty Advisor",
      department: "Electronics Department",
      description: "Provides guidance and support to the core team."
    },
    {
      image: "/work1.png",
      name: "Bob Williams",
      year: "Faculty Advisor",
      department: "Mechanical Engineering",
      description: "Advises on technical matters and project management."
    }
  ],
  projectLead: [
    {
      image: "/work1.png",
      name: "David Lee",
      year: "3rd Year",
      department: "Computer Science",
      description: "Leads and coordinates various projects across the club."
    }
  ],
  software: [
    {
      image: "/work1.png",
      name: "Eve Thompson",
      year: "2nd Year",
      department: "Information Technology",
      description: "In charge of software development and technical solutions."
    },
    {
      image: "/work1.png",
      name: "Mark Phillips",
      year: "3rd Year",
      department: "Computer Science",
      description: "Responsible for backend development and server management."
    }
  ],
  hardware: [
    {
      image: "/work1.png",
      name: "Sarah White",
      year: "3rd Year",
      department: "Electronics Engineering",
      description: "Leads the hardware team and works on circuit designs."
    },
    {
      image: "/work1.png",
      name: "Tom Brown",
      year: "4th Year",
      department: "Mechanical Engineering",
      description: "Focuses on hardware prototyping and testing."
    }
  ],
  publicRelations: [
    {
      image: "/work1.png",
      name: "Lily Evans",
      year: "2nd Year",
      department: "Marketing",
      description: "Handles public relations and social media presence."
    },
    {
      image: "/work1.png",
      name: "Oscar Hernandez",
      year: "3rd Year",
      department: "Business Administration",
      description: "Coordinates club operations and logistics."
    },
    {
      image: "/work1.png",
      name: "Mia Scott",
      year: "4th Year",
      department: "Supply Chain Management",
      description: "Manages operational workflows and event execution."
    }
  ]
};

const CoreMembersPage = () => {
  return (
    <div className="pt-20 container mx-auto p-6 bg-white shadow-lg w-full">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Core Members</h1>

      {Object.keys(coreMembers).map((domain) => (
        <div key={domain} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600 capitalize">{domain}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {coreMembers[domain].map((member, index) => (
              <Card
                key={index}
                className="w-72 h-96 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl mx-auto"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-40 object-cover"
                />
                <CardHeader className="p-4">
                  <CardTitle className="text-lg font-bold text-gray-900">{member.name}</CardTitle>
                  <p className="text-sm text-gray-600">{member.year} - {member.department}</p>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-700 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoreMembersPage;
