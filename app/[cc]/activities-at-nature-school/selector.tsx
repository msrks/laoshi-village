import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function GroupSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a group" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Group</SelectLabel>
          <SelectItem value="all">全部</SelectItem>
          <SelectItem value="1">個人</SelectItem>
          <SelectItem value="2">学校</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function TypeSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Type</SelectLabel>
          <SelectItem value="all">全部</SelectItem>
          <SelectItem value="1">巡村游览</SelectItem>
          <SelectItem value="2">连接自然</SelectItem>
          <SelectItem value="3">低碳生活体验</SelectItem>
          <SelectItem value="4">启迪课程</SelectItem>
          <SelectItem value="5">住宿体验</SelectItem>
          <SelectItem value="6">农耕体验</SelectItem>
          <SelectItem value="7">线上活动</SelectItem>
          <SelectItem value="8">永续社区</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function AgeSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a age" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Age</SelectLabel>
          <SelectItem value="all">全部</SelectItem>
          <SelectItem value="1">幼稚園</SelectItem>
          <SelectItem value="2">小学</SelectItem>
          <SelectItem value="3">中学</SelectItem>
          <SelectItem value="4">成人</SelectItem>
          <SelectItem value="5">家庭及児童</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
