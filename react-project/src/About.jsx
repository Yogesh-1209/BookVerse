import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import bookCover from "@/assets/imgggg.jpg";

export default function Data1() {
  const team = [
    { name: "Yogesh", image: bookCover },
    { name: "Sagar", image: bookCover },
    { name: "Gunjika", image: bookCover },
    { name: "Sneha", image: bookCover },
  ];

  return (
    <div className="space-y-8 p-4">
      {/* Why Bookverse Section */}
      <Card className=" p-6">
        <CardContent className="space-y-4">
          <h3 className="text-xl font-bold">
            Why <span>Book</span>
            <span className="text-red-600">Verse</span>?
          </h3>
          <p className="text-sm leading-relaxed">
            <p className="italic">
              Where stories find structure—and readers find their rhythm.
            </p>
            <br></br>
            <p>
              Bookverse is more than just a reading tracker, it's your gateway
              to a curated universe of discovery. Designed to declutter your
              bookshelf and your brain, it helps you organize titles, unlock
              recommendations, and connect with a community that loves books as
              much as you do. Whether you are a casual reader or a literary
              explorer, Bookverse transforms every page you read into part of a
              bigger story yours.
            </p>
          </p>
          <div className="w-16 h-1 bg-white/40 rounded"></div>
        </CardContent>
      </Card>

      {/* Team Section */}
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Our Team</CardTitle>
          <CardDescription>Meet the creators behind Bookverse</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-4 flex items-center gap-4 bg-zinc-100 dark:bg-zinc-900"
            >
              <img
                src={member.image}
                alt={`${member.name} profile`}
                className="w-16 h-16 object-cover rounded-full border"
              />
              <div>
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
