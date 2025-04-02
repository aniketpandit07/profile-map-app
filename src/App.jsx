import React, { useState } from "react";
import "./App.css";

const initialProfiles = [
  {
    id: 1,
    name: "Krishna Patil",
    photo: `https://dummyimage.com/200x200/23dafa/f0f0f0&text=Krishna+Patil`,
    description: "Web Developer",
    location: { lat: 37.7749, lng: -122.4194 },
  },
  {
    id: 2,
    name: "Akash Lamture",
    photo: "https://dummyimage.com/200x200/23dafa/f0f0f0&text=Akash+Lamture",
    description: "UI/UX Designer",
    location: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: 3,
    name: "Aniket Pandit",
    photo: "https://dummyimage.com/200x200/23dafa/f0f0f0&text=Aniket+Pandit",
    description: "UI/UX Designer",
    location: { lat: 40.7128, lng: -74.006 },
  },
];



function App() {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [search, setSearch] = useState("");
  const [newProfile, setNewProfile] = useState({ name: "", description: "", photo: "", lat: "", lng: "" });

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddProfile = () => {
    const id = profiles.length + 1;
    const profileToAdd = {
      id,
      name: newProfile.name,
      description: newProfile.description,
      photo: newProfile.photo || "https://dummyimage.com/200x200/23dafa/f0f0f0&text=Aniket+Pandit",
      location: { lat: parseFloat(newProfile.lat), lng: parseFloat(newProfile.lng) },
    };
    setProfiles([...profiles, profileToAdd]);
    setNewProfile({ name: "", description: "", photo: "", lat: "", lng: "" });
  };

  return (
    <div className="app-container">
      <h1>Profile Map Application</h1>
      <input
        type="text"
        placeholder="Search profiles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="add-profile">
        <h2>Add New Profile</h2>
        <input type="text" placeholder="Name" value={newProfile.name} onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })} />
        <input type="text" placeholder="Description" value={newProfile.description} onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })} />
        <input type="text" placeholder="Photo URL" value={newProfile.photo} onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })} />
        <input type="text" placeholder="Latitude" value={newProfile.lat} onChange={(e) => setNewProfile({ ...newProfile, lat: e.target.value })} />
        <input type="text" placeholder="Longitude" value={newProfile.lng} onChange={(e) => setNewProfile({ ...newProfile, lng: e.target.value })} />
        <button onClick={handleAddProfile}>Add Profile</button>
      </div>

      <div className="profile-list">
        {filteredProfiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <img src={profile.photo} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <button onClick={() => setSelectedProfile(profile)}>Show on Map</button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
